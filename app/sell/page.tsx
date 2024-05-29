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
import { SellForm } from "../components/form/SellForm";

export default function SellRoute() {
    const initialState: State = { message: "", status: undefined }
    const [state, formAction] = useFormState(SellProduct, initialState)
    const [json, setJson] = useState<null | JSONContent>(null)
    const [Images, setImages] = useState<string[] | null>(null);
    const [productFile, setProductFile] = useState<null | string>(null)
    console.log(state?.errors);
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8">
            <Card>
                <SellForm />
            </Card>
        </section>
    )
}