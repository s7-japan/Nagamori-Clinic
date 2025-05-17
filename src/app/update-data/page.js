'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function UpdateDataPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const updateData = async () => {
    setLoading(true);
    setResult(null);
    
    try {
      const response = await fetch('/api/sheets', {
        method: 'GET',
      });
      
      const data = await response.json();
      
      if (response.ok) {
        toast.success('Data updated successfully!');
        setResult({ success: true, message: data.message });
      } else {
        toast.error('Failed to update data');
        setResult({ success: false, message: data.error });
      }
    } catch (error) {
      toast.error('An error occurred');
      setResult({ success: false, message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Update Schedule Data</h1>
      <p className="mb-6">
        This page allows you to update the schedule data from Google Sheets. 
        Click the button below to fetch the latest data and update it.
      </p>
      
      <button 
        onClick={updateData}
        disabled={loading}
        className={`px-6 py-3 rounded-md ${
          loading 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700'
        } text-white font-medium transition-colors`}
      >
        {loading ? 'Updating...' : 'Update Data from Google Sheets'}
      </button>
      
      {result && (
        <div className={`mt-6 p-4 rounded-md ${
          result.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          <p className="font-medium">{result.success ? 'Success!' : 'Error!'}</p>
          <p>{result.message}</p>
        </div>
      )}
    </div>
  );
} 