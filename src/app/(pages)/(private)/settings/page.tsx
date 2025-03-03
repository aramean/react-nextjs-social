"use client"

import Br from "@/components/partials/br"
import Heading from "@/components/partials/heading"
import ListItem from "@/components/partials/listItem"
import Sidebar from "@/components/partials/sidebar"

export default function Settings() {

  return (<div className="flex my-10">
    <div className="w-2/5">
      <Sidebar />
    </div>
    <div className="w-3/5">
      <Heading text="Profile information" size="2xl"></Heading>
      <Br height="xl" />
      <ListItem href="settings/account/name" title="Name" value="Josef"></ListItem>
      <ListItem href="settings/account/email" title="Email" value="@"></ListItem>
      <Br height="xxl" />
      <Heading text="Account management" size="2xl"></Heading>
      <Br height="xl" />
      <ListItem href="settings/account/remove" title="" value="Remove account"></ListItem>
    </div>
  </div>)
}