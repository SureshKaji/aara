// @ts-nocheck
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CreateUser } from "../../../action.ts/user";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    marketing_accept: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    let errors = {};
    const { name, email, password } = formData;

    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      // Form is valid, you can submit the data here
      console.log(formData);
      await CreateUser({
        email: formData.email,
        password: formData.password,
        username: formData.name,
      });

      router.push("/home");
    } else {
      setErrors(errors);
    }
  };

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt="Pattern"
            src={"/svg/aari1.jpg"}
            className="absolute inset-0 h-full w-full object-cover rounded-xl"
            layout="fill"
            objectFit="cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to <span className="text-[#116466] ">Aara Fashion </span>
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              Signup to get started with Aara
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-gray-800"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="FirstName"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="name"
                  className="mt-1 h-10 px-2  w-full rounded-md border-gray-200 bg-white border text-sm text-gray-800 shadow-sm"
                />
                {errors.name && (
                  <span className="text-red-500">{errors.name}</span>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-800"
                >
                  {" "}
                  Email{" "}
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="test@gmail.com"
                  className="mt-1 h-10 px-2 w-full rounded-md border-gray-200 bg-white border text-sm text-gray-800 shadow-sm"
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email}</span>
                )}
              </div>

              <div className="col-span-6 ">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-800"
                >
                  {" "}
                  Password{" "}
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="*********"
                  className="mt-1 h-10 px-2 w-full rounded-md border-gray-200 bg-white border text-sm text-gray-800 shadow-sm"
                />
                {errors.password && (
                  <span className="text-red-500">{errors.password}</span>
                )}
              </div>

              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    checked={formData.marketing_accept}
                    onChange={handleChange}
                    required
                    className="h-5 w-5 rounded-md border-gray-200 bg-white border shadow-sm"
                  />

                  <span className="text-sm text-gray-800">
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <Button
                  className="rounded-md  bg-[#116466] hover:bg-[#116566e6] px-12 py-3 text-sm font-medium text-white "
                  type="submit"
                >
                  Create account
                </Button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <Link href="/login" className="text-gray-800 underline mx-1">
                    Log in
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default RegisterPage;
