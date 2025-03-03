"use client"

import Link from "next/link"
import SettingsForm from "@/components/forms/settings.name"
import Box from "@/components/partials/box"
import IconBack from "@/components/partials/icons/back"
import Sidebar from "@/components/partials/sidebar"

export default function SettingsName() {
  return (<div className="flex">
    <div className="w-2/5">
      <Sidebar />
    </div>
    <div className="w-3/5">
      <Link className="flex flex-row my-4" href="/settings">
        <IconBack />Profile information
      </Link>
      <Box>
        <SettingsForm />
      </Box>
    </div>
  </div>)
}