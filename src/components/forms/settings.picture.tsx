"use client"

import { useState, useRef } from "react"
import { useAccount } from "@/hooks/useAccount"
import Alert from "@/components/partials/alert"
import Button from "@/components/partials/button"
import { PhotoIcon, XMarkIcon } from "@heroicons/react/24/outline" // Heroicons
import { useAccountPicture } from "@/hooks/useAccountPicture"
import Image from "next/image"

const SettingsFormPicture = () => {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null) // Ref to reset input
  const { isLoading, error } = useAccount()
  const { picture, uploadPicture, removePicture } = useAccountPicture()

  if (picture && !preview) {
    console.log(picture)
    setPreview(picture)
    setFile(null)
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setPreview(URL.createObjectURL(selectedFile)) // Generate preview
    }
  }

  const handleFileSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (file) {
      await uploadPicture(file)
      setFile(null) // Clear the file after upload
      setPreview(null)
    }
  }

  const handleRemoveImage = async () => {
    if (picture) {
      await removePicture()
    }
    setFile(null)
    setPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = "" // Reset file input
    }
  }

  return (
    <form onSubmit={handleFileSubmit} className="flex flex-col items-center gap-4 w-full">
      <div className="relative w-24 h-24">
        {preview ? (
          <>
            <Image
              src={preview}
              alt="Preview"
              width={96}  // Width in pixels
              height={96} // Height in pixels
              className="object-cover rounded-full border border-gray-300 shadow-md"
            />
            <button
              onClick={handleRemoveImage}
              type="button"
              className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-1 shadow hover:bg-red-700 transition"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </>
        ) : (
          <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gray-200 border border-gray-300 shadow-md">
            <PhotoIcon className="text-gray-500 w-8 h-8" />
          </div>
        )}
      </div>

      <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition flex items-center gap-2">
        <PhotoIcon className="w-5 h-5" />
        Select {picture && " New"} Picture
        <input
          ref={fileInputRef} // Reset input when removing image
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {error && <Alert message={error} />}

      <Button disabled={isLoading || !file} value="Upload" />
    </form>
  )
}

export default SettingsFormPicture