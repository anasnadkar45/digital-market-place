'use client'
import { Card } from "@/components/ui/card";
import { SellForm } from "../components/form/SellForm";

export default function SellRoute() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8">
            <Card>
                <SellForm />
            </Card>
        </section>
    )
}