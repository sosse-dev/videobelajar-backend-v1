import DeleteUserButton from "./DeleteUserButton";
import LogoutButton from "./LogoutButton";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { editProfileSchema } from "@/schema/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { user } from "@/type/types";
import { z } from "zod";

export default function ProfileForm({ user }: { user: user | undefined }) {
  const session = useAuth();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof editProfileSchema>>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      name: "",
      email: "",
      countryCode: "+62",
      phoneNumber: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof editProfileSchema>> = async (
    values
  ) => {
    const getUsers = localStorage.getItem("users");

    let users: user[] = [];

    if (getUsers) {
      users = JSON.parse(getUsers);
    }

    const userIndex = users.findIndex(
      (user) =>
        user.email === session?.email && user.password === session?.password
    );

    if (userIndex === -1) {
      toast.error("Pengguna tidak ada");
      return;
    }

    // Update the matched user's information
    users[userIndex] = {
      ...users[userIndex],
      name: values.name,
      email: values.email,
      countryCode: values.countryCode,
      phoneNumber: values.phoneNumber,
    }; // user diambil sesuai indeksnya, kemudian beberapa value diperbarui sesuai input dari form

    const editedUser = users[userIndex];

    localStorage.setItem("loggedInUser", JSON.stringify(editedUser)); // ubah di loggedInUser
    localStorage.setItem("users", JSON.stringify(users)); // update juga localstorage

    navigate(0); // untuk refresh halaman
    toast.success("Pengguna berhasil diperbarui");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row gap-6 items-start sm:px-12 lg:px-0"
      >
        {/* Full Name Field */}
        <FormItem className="w-full md:w-[25%]">
          <FormLabel className="text-sm text-[#333]/[0.68]">Nama</FormLabel>
          <FormControl>
            <Input
              {...form.register("name")}
              className="border-[#3ecf4c] dark:bg-white focus-visible:ring focus-visible:ring-[#3ecf4c]/40 mt-1"
              placeholder={user?.name}
              defaultValue={user?.name}
            />
          </FormControl>
          <FormMessage>{form.formState.errors.name?.message}</FormMessage>
        </FormItem>

        {/* Email Field */}
        <FormItem className="w-full md:w-[20%]">
          <FormLabel className="text-sm text-[#333]/[0.68]">E-Mail</FormLabel>
          <FormControl>
            <Input
              {...form.register("email")}
              className="mt-1 dark:bg-white"
              placeholder={user?.email}
              defaultValue={user?.email}
            />
          </FormControl>
          <FormMessage>{form.formState.errors.email?.message}</FormMessage>
        </FormItem>

        {/* Phone Number Section */}
        <div className="flex flex-col w-full md:flex-1 gap-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Country Code */}
            <FormItem className="md:w-auto h-fit flex flex-col">
              <FormLabel className="text-sm text-[#333]/[0.68]">
                Kode Negara
              </FormLabel>
              <FormControl>
                <Select defaultValue="+62" {...form.register("countryCode")}>
                  <SelectTrigger className="dark:bg-white cursor-pointer">
                    <SelectValue placeholder="+62" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-white">
                    <SelectItem
                      className="dark:bg-white text-black cursor-pointer"
                      value="+62"
                    >
                      Indonesia (+62)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage>
                {form.formState.errors.countryCode?.message}
              </FormMessage>
            </FormItem>

            {/* Phone Number */}
            <FormItem className="flex-1">
              <FormLabel className="text-sm text-[#333]/[0.68]">
                No. Hp
              </FormLabel>
              <FormControl>
                <Input
                  {...form.register("phoneNumber")}
                  className="mt-1 dark:bg-white"
                  placeholder={user?.phoneNumber}
                  defaultValue={user?.phoneNumber}
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.phoneNumber?.message}
              </FormMessage>
            </FormItem>
          </div>

          {/* Submit Button */}
          <div className="self-end flex flex-col-reverse w-full md:w-fit gap-y-2 md:flex-row md:gap-x-3">
            <DeleteUserButton session={session} />

            <LogoutButton />

            <button
              type="submit"
              className="bg-[#3ecf4c] text-white font-bold py-2 px-7 rounded-lg w-full md:w-auto cursor-pointer hover:opacity-80"
            >
              Simpan
            </button>
          </div>
        </div>
      </form>
    </Form>
  );
}
