import React, { useEffect, useState } from "react";
import Authlayout from "../../../../components/layout/Authlayout";
import Layouts from "../../../../components/layout/Layouts";

const Form = ({ type, onSubmit,initialdata }) => {
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    description: "",
    category: "",
    image: null,
  });
  useEffect(() => {
    if (initialdata) {
      setData(initialdata);
    }
  }, [initialdata]);
  console.log(data);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: name === "image" ? e.target.files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <Authlayout>
      <div class="bg-gray-100 flex items-center justify-center h-screen">
        <div class="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
          <h2 class="text-2xl font-semibold text-center mb-4">
            {type} Blog here
          </h2>
          <p class="text-gray-600 text-center mb-6">
            Share your information correctly
          </p>
          <form onSubmit={handleSubmit}>
            <div class="mb-4">
              <label
                for="fullName"
                class="block text-gray-700 text-sm font-semibold mb-2"
              >
                Blog Title*
              </label>
              <input
                type="text"
                id="fullName"
                name="title"
                value={data.title}
                onChange={handleInput}
                class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                required
                placeholder="James Brown"
              />
            </div>
            <div class="mb-4">
              <label
                for="fullName"
                class="block text-gray-700 text-sm font-semibold mb-2"
              >
                Sub Title*
              </label>
              <input
                type="text"
                id="fullName"
                name="subtitle"
                value={data.subtitle}
                onChange={handleInput}
                class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="fullName"
                class="block text-gray-700 text-sm font-semibold mb-2"
              >
                Image*
              </label>
              <input
                type="file"
                accept="image/*"
                id="image"
                name="image"
            //  value={data.imageUrl}
                onChange={handleInput}
                class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                required
              />
            </div>

            <div class="mb-4">
              <label
                for="fullName"
                class="block text-gray-700 text-sm font-semibold mb-2"
              >
                Category*
              </label>
              <input
                type="text"
                id="fullName"
                name="category"
                value={data.category}
                onChange={handleInput}
                class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="fullName"
                class="block text-gray-700 text-sm font-semibold mb-2"
              >
                Descreptions*
              </label>
              <textarea
              value={data.description}
                type="text"
                id="fullName"
                name="description"
                onChange={handleInput}
                class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                required
              />
            </div>

            {type === "Add" ? (
              <button
                type="submit"
                class="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Post
              </button>
            ) : (
              <button
                type="submit"
                class="w-full bg-blue-500  text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Edit
              </button>
            )}
          </form>
        </div>
      </div>
    </Authlayout>
  );
};

export default Form;
