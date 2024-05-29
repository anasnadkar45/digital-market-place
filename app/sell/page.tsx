'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectCategory } from "../components/SelectCategory";
import { Textarea } from "@/components/ui/textarea";
import { TipTapEditor } from "../components/Editor";
import { UploadDropzone } from "../lib/uploadthing";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { JSONContent } from "@tiptap/react";
import { error } from "console";
import { useFormState } from "react-dom";
import { SellProduct, State } from "../actions";

export default function SellRoute() {
    const initialState: State  = {message:"", status:undefined}
    const [state, formAction] = useFormState(SellProduct,initialState)
    const [json , setJson] = useState<null | JSONContent>(null)
    const [Images , setImages] = useState< string[] | null>(null);
    const [productFile , setProductFile] = useState<null | string>(null)

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8">
            <Card>
                <form action={formAction}>
                    <CardHeader>
                        <CardTitle>Sell your product with ease</CardTitle>
                        <CardDescription>
                            Please describe your product here in detail do that it can be sold
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-y-10">
                        <div className="flex flex-col gap-y-2">
                            <Label>Name</Label>
                            <Input type="text" name="name" placeholder="Name of Product"></Input>
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <Label>Category</Label>
                            <SelectCategory />
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <Label>Price</Label>
                            <Input placeholder="29$" type="number" name="price" />
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <Label>Small Summary</Label>
                            <Textarea name="smallDescription" placeholder="Please describe your product shortly right here..." />
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <input
                                type="hidden"
                                name="description"
                                value={JSON.stringify(json)}
                            />
                            <Label>Description</Label>
                            <TipTapEditor json={json} setJson={setJson}  />
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <input type="hidden" name="images" value={JSON.stringify(Images)} />
                            <Label>Product Images</Label>
                            <UploadDropzone endpoint="imageUploader" className="border border-white" 
                            onClientUploadComplete={(res) => {
                                setImages(res.map(image => image.url))
                            }}
                            onUploadError={(error:Error) => {
                                throw new Error(`${error}`)
                            }}
                            />
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <input type="hidden" name="productFile" value={productFile ?? ""} />
                            <Label>Product File</Label>
                            <UploadDropzone endpoint="productFileUpload" className="border border-white"
                            onClientUploadComplete={(res)=> {
                                setProductFile(res[0].url);
                            }}
                            onUploadError={(error:Error) => {
                                throw new Error(`${error}`)
                            }}
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="mt-5">
                        <Button type="submit">Submit form</Button>
                    </CardFooter>
                </form>
            </Card>
        </section>
    )
}