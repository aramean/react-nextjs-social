"use client"

import ListItem from "@/components/partials/listItem"
import Sidebar from "@/components/partials/sidebar"

export default function Settings() {

  return (<div className="flex">
    <div className="w-2/5">
      <Sidebar />
    </div>
    <div className="w-3/5">
      Profile information
      <ListItem href="settings/name" title="Name" value="Josef"></ListItem>
    </div>
  </div>)
}