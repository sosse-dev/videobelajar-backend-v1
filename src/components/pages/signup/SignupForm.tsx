import GoogleButton from "../_generic/form/GoogleButton";
import DividerForm from "../_generic/form/DividerForm";
import HeaderForm from "../_generic/form/HeaderForm";
import bcrypt from "bcryptjs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { IndonesianFlag, X } from "../../icons/icons";
import { Link, useNavigate } from "react-router-dom";
import { signupSchema } from "@/schema/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { user } from "@/type/types";
import { z } from "zod";

export default function SignupForm() {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      countryCode: "+62",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const navigate = useNavigate();

  const onSubmit = async (values: z.infer<typeof signupSchema>) => {
    const getUsers = localStorage.getItem("users"); // Ambil users[]

    let users: user[] = []; // Buat let users[]

    if (getUsers) {
      users = JSON.parse(getUsers); // jika ada, masukan users[] dari localStorage ke users[] let diatas
    }

    const isUserExists = users.some((user) => user.email === values.email); // mengecek jika email input dari form sudah ada di localstorage atau tidak

    if (isUserExists) {
      toast.error("Email sudah terdaftar");
      return;
    }

    const hashedPassword = await bcrypt.hash(values.password, 10); // ubah password dengan bcrypt

    users.push({
      name: values.name,
      email: values.email,
      countryCode: values.countryCode,
      phoneNumber: values.phoneNumber,
      password: hashedPassword,
    }); // array let users[] ditambahkan

    localStorage.setItem("users", JSON.stringify(users)); // kemudian dimasukan ke users[] ke local storage

    toast.success("Pendaftaran berhasil");
    navigate("/login"); // user dipindahkan ke login setelah membuat akun
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-[500px] border border-gray-300 bg-white p-6 rounded-lg"
      >
        {/* Form Header */}
        <HeaderForm
          title="Pendaftaran Akun"
          desc="Yuk, daftarkan akunmu sekarang juga!"
        />

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Full Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Nama Lengkap<span className="text-red-500 ml-1">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Nama lengkap" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  E-Mail<span className="text-red-500 ml-1">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="xxx@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Number */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  No. Hp<span className="text-red-500 ml-1">*</span>
                </FormLabel>
                <div className="flex flex-row-reverse items-center gap-5">
                  <FormControl>
                    <Input
                      placeholder="083940923849"
                      {...field}
                      className="w-[70%] sm:flex-grow"
                    />
                  </FormControl>
                  <div className="flex items-center border rounded border-gray-300 h-10">
                    <IndonesianFlag />
                    <div className="flex items-center justify-between px-1.5 text-sm cursor-pointer">
                      <span className="mx-2">+62</span>
                      <X />
                    </div>
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Kata Sandi<span className="text-red-500 ml-1">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword.password ? "text" : "password"}
                      placeholder="********"
                      {...field}
                      className="pr-10"
                    />
                    <div className="absolute right-2 top-2.5 cursor-pointer">
                      {showPassword.password ? (
                        <EyeIcon
                          onClick={() =>
                            setShowPassword((value) => ({
                              password: false,
                              confirmPassword: value.confirmPassword,
                            }))
                          }
                          className="w-5 h-5 text-gray-500"
                        />
                      ) : (
                        <EyeOffIcon
                          onClick={() =>
                            setShowPassword((value) => ({
                              password: true,
                              confirmPassword: value.confirmPassword,
                            }))
                          }
                          className="w-5 h-5 text-gray-500"
                        />
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Password */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Konfirmasi Kata Sandi
                  <span className="text-red-500 ml-1">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword.confirmPassword ? "text" : "password"}
                      placeholder="********"
                      {...field}
                      className="pr-10"
                    />
                    <div className="absolute right-2 top-2 cursor-pointer">
                      {showPassword.confirmPassword ? (
                        <EyeIcon
                          onClick={() =>
                            setShowPassword((value) => ({
                              password: value.password,
                              confirmPassword: false,
                            }))
                          }
                          className="w-5 h-5 text-gray-5)00"
                        />
                      ) : (
                        <EyeOffIcon
                          onClick={() =>
                            setShowPassword((value) => ({
                              password: value.password,
                              confirmPassword: true,
                            }))
                          }
                          className="w-5 h-5 text-gray-500"
                        />
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Forgot Password */}
        <a
          href="#"
          className="text-sm text-opacity-60 font-bold mt-4 block text-right"
        >
          Lupa Password?
        </a>

        {/* Action Buttons */}
        <div className="space-y-3.5 mt-5">
          <Button
            type="submit"
            className="w-full font-bold dark:bg-green-500 dark:text-white dark:hover:bg-green-600"
          >
            Daftar
          </Button>
          <Link to="/login">
            <Button
              variant="outline"
              className="w-full font-bold dark:bg-green-50 text-green-600 dark:hover:text-green-700 border-0 dark:hover:bg-green-100"
            >
              Masuk
            </Button>
          </Link>
        </div>

        {/* Divider */}
        <DividerForm />

        <GoogleButton />
      </form>
    </Form>
  );
}
