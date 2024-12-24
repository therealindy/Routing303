import { Link } from '@inertiajs/react';

export default function Show({ products }) {
    return (
        <div>
            <div className="bg-white shadow ">
                <div className='px-8 mx-auto max-w-7xl sm:px-6'>
                    <div className=" py-10 flex items-start space-x-4" >
                        <h1 className="text-4xl font-bold">E-book</h1>
                    </div>
                </div>
            </div>
            <div className="px-8 mx-auto max-w-7xl sm:px-6 py-8 ">

                <div className="flex items-start space-x-8"> {/* ใช้เพื่อจัดเรียงแนวนอน */}
                    <img
                        src={products.image}
                        alt={products.name}
                        className="object-cover rounded mb-4" // กำหนดขนาดและสไตล์ของรูป
                    />
                    <div className="px-10 py-10"> {/* กล่องข้อความ */}
                        <h1 className="text-3xl font-bold mb-2">{products.name}</h1>
                        <p className="text-gray-700 mb-4">{products.description}</p>
                        <p className="text-gray-700 font-bold mb-2 ">ราคา: {products.price}฿</p>
                        <Link
                            href="/products"
                            className="text-red-500 text-lg hover:underline  mt-10 block"
                        >
                            Back to E-book
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
