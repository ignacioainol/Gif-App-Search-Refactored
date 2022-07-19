import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Futurama']);

  const onAddCategory = (newCategory) => {

    if (categories.find(cat => cat.toLowerCase() === newCategory.toLowerCase())) return;

    setCategories([newCategory, ...categories]);
  }

  return (
    <div className="container pt-5">
      <h1>Gif Search</h1>
      <figcaption class="blockquote-footer animate__animated animate__backInDown">
        Developed by <cite title="ignacio_Ainol">ignacio_Ainol</cite>
      </figcaption>

      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />

      {
        categories.map((category) =>
        (
          <GifGrid
            category={category}
            key={category} />
        ))
      }


    </div>
  )
}
