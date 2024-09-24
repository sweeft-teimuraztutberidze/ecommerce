'use client';

import TextFieldComponent from "@/elements/textField/textField.component";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {useDebounce} from "@/hooks/useDebounce";

const SearchComponent = () => {
  const [value, setValue] = useState('')
  const debouncedValue = useDebounce<string>(value)
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('search', debouncedValue || '')
    router.replace(`${pathname}?${params.toString()}`)
  }, [debouncedValue, pathname, router, searchParams]);

  return (
   <div className='text-center'>
     <TextFieldComponent
       className='border border-solid border-gray-200 p-2 w-full max-w-md'
       placeholder='Type something'
       onChange={(event) => setValue(event.target.value)} />
   </div>
  )
}

export default SearchComponent;