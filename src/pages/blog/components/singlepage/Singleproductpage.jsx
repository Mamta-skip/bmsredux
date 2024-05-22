import React, { useEffect } from "react";
import Layouts from "../../../../components/layout/Layouts";
import { Link } from "react-router-dom";
import {
  deleteBlog,
  setStatus,
  singleBlog,
} from "../../../../../store/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import STATUSES from "../../../../globals/status/statuses";
const Singleproductpage = () => {
  const { singleblog, status } = useSelector((state) => state.blog);
  console.log(singleblog);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(singleBlog(id));
  }, [dispatch]);
  

  const deleteBlogHere = () => {
    dispatch(deleteBlog(id));
    if(status===STATUSES.SUCCESS){
        navigate("/");
    }
  };


  return (
    <Layouts>
      <div class="bg-gray-100 dark:bg-gray-800 py-8">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
              <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img class="w-full h-full object-cover" src={singleblog.imageUrl}
 alt="Product Image"  />
              </div>
              <div class="flex -mx-2 mb-4">
                <Link to={`/blog/edit/${id}`} class="w-1/2 px-2">
                  <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                    Edit Blog
                  </button>
                </Link>

                <div class="w-1/2 px-2">
                  <button
                    onClick={deleteBlogHere}
                    class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                    Delete Blog
                  </button>
                </div>
              </div>
            </div>
            <div class="md:flex-1 px-4">
              <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {singleblog.title}
              </h2>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {singleblog.subtitle}
              </p>

              <div class="mb-4">
                <span class="font-bold text-gray-700 dark:text-gray-300">
                  {singleblog.category}
                </span>
                <div class="flex items-center mt-2">
                  <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    Education
                  </button>
                  <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    Travelling
                  </button>
                </div>
              </div>
              <div>
                <span class="font-bold text-gray-700 dark:text-gray-300">
                  Blog Description:
                </span>
                <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {singleblog.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};
export default Singleproductpage;
