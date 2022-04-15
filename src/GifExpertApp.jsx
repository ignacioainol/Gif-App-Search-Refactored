import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {

    if (categories.find(cat => cat.toLowerCase() === newCategory.toLowerCase())) return;

    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>Gif Search ignacio_Ainol</h1>

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


    </>
  )
}
