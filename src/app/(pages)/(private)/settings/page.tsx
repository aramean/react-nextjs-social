"use client"

import Br from "@/components/partials/br"
import Heading from "@/components/partials/heading"
import ListItem from "@/components/partials/listItem"
import Sidebar from "@/components/partials/sidebar"

export default function Settings() {

  return (<div className="flex">
    <div className="w-2/5">
      <Sidebar />
    </div>
    <div className="w-3/5">
      <Heading text="Profile information" size="2xl"></Heading>
      <Br height="md" />
      <ListItem href="settings/name" title="Name" value="Josef"></ListItem>
    </div>
  </div>)
}