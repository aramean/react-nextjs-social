"use client"

import { formatDistanceToNow, parseISO } from "date-fns"

export const formatTimeAgo = (isoDate?: string) => {
  const date = isoDate ? parseISO(isoDate) : new Date()
  return formatDistanceToNow(date, { addSuffix: true })
}