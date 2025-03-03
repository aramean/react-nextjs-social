"use client"

import SettingsForm from "@/components/forms/settings.name"
import Box from "@/components/partials/box"
import Button from "@/components/partials/button"
import Sidebar from "@/components/partials/sidebar"

export default function SettingsName() {
  return (<div className="flex">
    <div className="w-2/5">
      <Sidebar />
    </div>
    <div className="w-3/5">
      <Button value="Back" />Profile information

      <Box>
        <SettingsForm />
      </Box>
    </div>
  </div>)
}