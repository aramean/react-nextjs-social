"use client"

import Br from "@/components/partials/br"
import Heading from "@/components/partials/heading"
import ListItem from "@/components/partials/listItem"

export default function Settings() {

  return (<>
    <Heading text="Profile information" size="2xl"></Heading>
    <Br height="xl" />
    <ListItem href="settings/account/name" title="Name" value="Josef"></ListItem>
    <ListItem href="settings/account/email" title="Email" value="@"></ListItem>
    <Br height="xxl" />
    <Heading text="Account management" size="2xl"></Heading>
    <Br height="xl" />
    <ListItem href="settings/account/remove" title="" value="Remove account"></ListItem>
  </>)
}