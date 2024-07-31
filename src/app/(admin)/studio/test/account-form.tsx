// 'use client'

// import { zodResolver } from '@hookform/resolvers/zod'

// import { useForm } from 'react-hook-form'
// import { z } from 'zod'

// import { Button } from '@/components/ui/button'
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from '@/components/ui/command'
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form'
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from '@/components/ui/popover'
// import { cn } from '@/lib/utils'
// import { CategorySchema } from '@/types/category-schema'
// import { ProductSchema } from '@/types/product-schema'
// import { SortAsc } from 'lucide-react'

// type AccountFormValues = z.infer<typeof ProductSchema>

// // This can come from your database or API.
// const defaultValues: Partial<AccountFormValues> = {
//   // name: "Your name",
//   // dob: new Date("2023-01-23"),
// }

// export function AccountForm({
//   data,
// }: {
//   data: {
//     id: number
//     title: string
//     description: string
//     createdAt: Date | null
//   }[]
// }) {
//   const form = useForm<AccountFormValues>({
//     resolver: zodResolver(ProductSchema),
//     defaultValues,
//   })

//   function onSubmit(data: AccountFormValues) {
//     console.log(data)
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//         <FormField
//           control={form.control}
//           name="categoryId"
//           render={({ field }) => (
//             <FormItem className="flex flex-col">
//               <FormLabel>Category</FormLabel>
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <FormControl>
//                     <Button
//                       variant="outline"
//                       role="combobox"
//                       className={cn(
//                         'w-[200px] justify-between',
//                         !field.value && 'text-muted-foreground'
//                       )}
//                     >
//                       {field.value
//                         ? data.find((cat) => cat.title === field.value)?.title
//                         : 'Select language'}
//                       <SortAsc className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//                     </Button>
//                   </FormControl>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-[200px] p-0">
//                   <Command>
//                     <CommandInput placeholder="Search language..." />
//                     <CommandEmpty>No language found.</CommandEmpty>
//                     <CommandList>
//                       <CommandGroup>
//                         {data.map((cat) => (
//                           <CommandItem
//                             value={cat.title}
//                             key={cat.id}
//                             onSelect={() => {
//                               form.setValue('category', cat.title)
//                             }}
//                           >
//                             {cat.title}
//                           </CommandItem>
//                         ))}
//                       </CommandGroup>
//                     </CommandList>
//                   </Command>
//                 </PopoverContent>
//               </Popover>

//               <FormDescription>
//                 This is the language that will be used in the dashboard.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Update account</Button>
//       </form>
//     </Form>
//   )
// }
