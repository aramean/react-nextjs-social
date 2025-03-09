"use client"

import Br from "@/components/partials/br"
import Heading from "@/components/partials/heading"
import ListItem from "@/components/partials/listItem"

export default function Settings() {

  return (<>
    <Heading text="Profile information" size="2xl"></Heading>
    <Br height="xl" />
    <ListItem href="settings/account/picture" title="Picture" value="Upload or change your profile picture."></ListItem>
    <ListItem href="settings/account/name" title="Name" value="Edit your full name."></ListItem>
    <ListItem href="settings/account/email" title="Email" value="Update your email address."></ListItem>
    <Br height="xxl" />
    <Heading text="Account management" size="2xl"></Heading>
    <Br height="xl" />
    <ListItem href="settings/account/remove" title="Remove account" value="Permanently delete your account and data"></ListItem>
  </>)
}