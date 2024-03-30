// @ts-nocheck
"use client";
import { CreateProduct } from "@/action.ts/product";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"

const ProductPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageUrl: "",
    price: "",
  });
  const [errors, setErrors] = useState({});
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = "Please enter a product name.";
    }
    if (!formData.description) {
      errors.description = "Please enter a product description.";
    }
    if (!formData.imageUrl) {
      errors.imageUrl = "Please enter a product image URL.";
    }
    if (!formData.price) {
      errors.price = "Please enter a product price.";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      setProducts([...products, formData]);
      await CreateProduct({
        name: formData.name,
        description: formData.description,
        price: formData.price,
        image: formData.name,
        imageUrl: formData.imageUrl,
      });
      setFormData({
        name: "",
        description: "",
        imageUrl: "",
        price: "",
      });
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="flex flex-col gap-9">
  <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark transition-all duration-300 hover:shadow-lg p-4">
    <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
      <h3 className="font-medium text-black dark:text-white transition-colors duration-300">
        Add Product
      </h3>
    </div>
    <form
      onSubmit={handleSubmit}
      className="p-6.5 transition-colors duration-300"
    >
      <div className="mb-4.5">
        <label className="mb-3 block text-sm font-medium text-black dark:text-white transition-colors duration-300">
          Product Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter product name"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary transition-colors duration-300 hover:shadow-sm"
        />
        {errors.name && (
          <p className="text-red-500 transition-colors duration-300">
            {errors.name}
          </p>
        )}
      </div>
      <div className="mb-4.5">
        <label className="mb-3 block text-sm font-medium text-black dark:text-white transition-colors duration-300">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          placeholder="Enter product description"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary transition-colors duration-300 hover:shadow-sm"
        ></textarea>
        {errors.description && (
          <p className="text-red-500 transition-colors duration-300">
            {errors.description}
          </p>
        )}
      </div>
      <div className="mb-4.5">
        <label className="mb-3 block text-sm font-medium text-black dark:text-white transition-colors duration-300">
          Image URL
        </label>
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="Enter product image URL"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary transition-colors duration-300 hover:shadow-sm"
        />
        {errors.imageUrl && (
          <p className="text-red-500 transition-colors duration-300">
            {errors.imageUrl}
          </p>
        )}
      </div>
      <div className="mb-4.5">
        <label className="mb-3 block text-sm font-medium text-black dark:text-white transition-colors duration-300">
          Price
        </label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter product price"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary transition-colors duration-300 hover:shadow-sm"
        />
        {errors.price && (
          <p className="text-red-500 transition-colors duration-300">
            {errors.price}
          </p>
        )}
      </div>
      <Button
        type="submit" className="mt-2 items-center">
        Add Product
      </Button>
    </form>
  </div>


      {/* <div>
        <h3 className="font-medium text-black dark:text-white">Products</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-6.5">
                <h4 className="mb-2 font-medium text-black dark:text-white">
                  {product.name}
                </h4>
                <p className="mb-4 text-sm text-black dark:text-white">
                  {product.description}
                </p>
                <p className="font-medium text-black dark:text-white">
                  Price: ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default ProductPage;
