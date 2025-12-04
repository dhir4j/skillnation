'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ordersAPI } from '@/lib/api';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

interface OrderItem {
  id: number;
  course_id: number;
  price: number;
  course: {
    id: number;
    title: string;
    image_url: string;
  };
}

interface Order {
  id: number;
  user_id: number;
  total_amount: number;
  status: string;
  payment_status: string;
  created_at: string;
  items: OrderItem[];
}

export default function ConfirmationPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const orderId = Number(params.id);

  useEffect(() => {
    if (user) {
      fetchOrder();
    } else {
      router.push('/login');
    }
  }, [user, orderId]);

  const fetchOrder = async () => {
    try {
      const response = await ordersAPI.getById(orderId);
      setOrder(response.data.order);
    } catch (err) {
      setError('Failed to load order details.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-lg">
          {error || 'Order not found'}
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Success Message */}
          <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 mb-8 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Payment Successful!
            </h1>
            <p className="text-gray-600 text-lg">
              Thank you for your purchase. Your order has been confirmed.
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Details</h2>

            <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b">
              <div>
                <p className="text-sm text-gray-600">Order ID</p>
                <p className="font-semibold text-gray-800">#{order.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Order Date</p>
                <p className="font-semibold text-gray-800">
                  {new Date(order.created_at).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Payment Status</p>
                <p className="font-semibold text-green-600 capitalize">
                  {order.payment_status}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Amount</p>
                <p className="font-semibold text-blue-600 text-xl">
                  ₹{order.total_amount.toLocaleString()}
                </p>
              </div>
            </div>

            <h3 className="font-bold text-gray-800 mb-4">Courses Purchased</h3>
            <div className="space-y-3">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded flex-shrink-0 overflow-hidden">
                    {item.course.image_url && (
                      <img
                        src={item.course.image_url}
                        alt={item.course.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{item.course.title}</p>
                    <p className="text-sm text-gray-600">₹{item.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* UPI QR Code Placeholder */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              UPI Payment QR Code
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Scan this QR code with any UPI app to complete your payment
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-dashed border-blue-300 rounded-xl p-12 text-center">
              <div className="bg-white rounded-lg p-8 inline-block shadow-inner">
                <svg
                  className="w-48 h-48 text-gray-300 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
                </svg>
                <p className="text-gray-500 mt-4 font-medium">
                  QR Code will be displayed here
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  (Upload your QR code image via admin panel)
                </p>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 text-center">
                <strong>Note:</strong> The admin will upload the UPI QR code image here. You can
                scan it to make the payment to the specified UPI ID.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/dashboard"
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
            >
              View My Orders
            </Link>
            <Link
              href="/courses"
              className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition text-center"
            >
              Browse More Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
