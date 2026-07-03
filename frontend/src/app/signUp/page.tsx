"use client";

import { useState } from "react";
import countries from "./country.json";
import currencies from "./currency.json";

export default function SignUpForm() {

    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [currency, setCurrency] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
    }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-md border border-gray-100">
        <div>
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">Create an Account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Sign up to get started</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4 rounded-md">
                <div>
                <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                    </label>

                <input 
                    id="name" 
                    name="name" 
                    type="text" 
                    required value="" 
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm" 
                    placeholder="John Doe" 
                />
                </div>

                <div>
                <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>

                <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required value="" 
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm" 
                    placeholder="you@example.com" 
                />
                </div>

                <div>
                <label 
                    htmlFor="password" 
                    className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>

                <input 
                    id="password" 
                    name="password" 
                    type="password" 
                    required minLength={6} 
                    value="" 
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm" 
                    placeholder="••••••••" 
                />
                </div>

                <div>
                <label 
                    htmlFor="dob" 
                    className="block text-sm font-medium text-gray-700 mb-1">
                        Date of Birth
                    </label>

                <input 
                    id="dob" 
                    name="dob" 
                    type="date" 
                    required 
                    value="" 
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                />
                </div>

                <div>
                    <label 
                        htmlFor="phone_number" 
                        className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                        </label>

                    <input 
                        id="phone_number" 
                        name="phone_number" 
                        type="tel" 
                        required 
                        value="" 
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                        placeholder="(123) 456-7890"
                    />
                </div>

                <div>
                    <label 
                        htmlFor="gender" 
                        className="block text-sm font-medium text-gray-700 mb-1">
                            Gender
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={gender === 'male'}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        <span className="ml-2 text-gray-400">Male</span>
                    </label>
                    
                    <label style={{ marginLeft: '15px' }}>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={gender === 'female'}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        <span className="ml-2 text-gray-400">Female</span>
                    </label>
                </div>
                
                <div>
                    <label 
                        className="block text-sm font-medium text-gray-700 mb-1">
                            Location
                    </label>

                    <select 
                        id="country" 
                        name="country" 
                        required 
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm bg-white"
                    >
                        <option value="" disabled>Select a country</option>
                        {countries.map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label 
                        className="block text-sm font-medium text-gray-700 mb-1">
                            Currency Preference
                    </label>

                    <select 
                        id="currency" 
                        name="currency" 
                        required 
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm bg-white"
                    >
                        <option value="" disabled>Select a currency</option>
                        {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                        ))}
                    </select>
                </div>
            </div>

          <div>
            <button type="submit" disabled={isLoading} className="group relative flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors">
              {isLoading ? "Creating account..." : "Sign Up"}
            </button>
          </div>
        </form>

        {message && (
          <p className={`${styles.feedback} ${message.includes("❌") ? "text-red-600" : "text-green-600"}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}