import * as React from "react"
 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select"
 
export function CollectionSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Colecție nouă" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Model</SelectLabel>
          <SelectItem value="apple">Bremen</SelectItem>
          <SelectItem value="banana">Bremen</SelectItem>
          <SelectItem value="blueberry">Bremen</SelectItem>
          <SelectItem value="grapes">Bremen</SelectItem>
          <SelectItem value="pineapple">Bremen</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}