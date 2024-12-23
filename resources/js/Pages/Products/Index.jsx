import { Link } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from "react";


export default function Index({ products }) {
    return (
        <>
            <AuthenticatedLayout header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    E-book
                </h2>
            }>
                <div className="py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div>
                        <ul className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
                            {products.map((products) => (
                                <li key={products.id} className="border border-gray-300 rounded p-4 w-30 h-1500">
                                    <Link href={`/products/${products.id}`}>

                                        {/* แสดงรูปภาพ */}
                                        <img
                                            src={products.image}  // ใช้ข้อมูล URL ของภาพจาก product.image
                                            alt={products.name}
                                            className=" object-cover rounded mb-4"  // กำหนดขนาดและสไตล์ของรูป
                                        />
                                        <h3 className="text-lg font-semibold">{products.name}</h3>
                                        <p className="text-gray-600">฿{products.price}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
