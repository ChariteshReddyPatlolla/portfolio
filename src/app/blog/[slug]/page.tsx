"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, BookOpen, Clock, Tag } from "lucide-react";

interface PostContent {
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  content: React.ReactNode;
}

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;

  const blogData: Record<string, PostContent> = {
    "high-throughput-pipelines": {
      title: "Architecting High-Throughput Pipelines: Lessons from Kafka & Kubernetes",
      date: "2026-06-15",
      readTime: "6 min read",
      tags: ["Distributed Systems", "Kafka", "Kubernetes"],
      content: (
        <div className="space-y-6">
          <p>
            When building high-throughput backend applications, message routing and horizontal scaling are the primary factors driving system reliability. In this log, I break down the core architectural choices for scaling data pipelines using Apache Kafka and Kubernetes.
          </p>
          
          <h3 className="text-sm font-bold text-[#ccff00] uppercase tracking-wider mt-6">[1] CONCURRENCY & PARTITIONING</h3>
          <p>
            A common bottleneck in message brokers is consumer group scaling. If a topic has 4 partitions, attaching 8 consumer instances to that group will leave 4 instances idle. In my distributed systems tests, I align partition depth directly with maximum anticipated scale, maintaining a 1:1 map with worker instances.
          </p>
          <pre className="bg-black p-4 border border-[#222] rounded text-[11px] text-[#ccff00] overflow-x-auto leading-normal">
{`# Sample Kafka Consumer Group Scaling Configuration
Topic: sensor-data-stream
Partitions: 12
Replication Factor: 3
Consumer Node Instances (K8s pods): 12`}
          </pre>

          <h3 className="text-sm font-bold text-[#ccff00] uppercase tracking-wider mt-6">[2] LATENCY AND CACHING GATEWAYS</h3>
          <p>
            In-memory cache layers (using Redis or custom memory matrices) must sit before database commit queues to prevent index locking. Write-behind (write-back) caching strategy ensures rapid network acknowledgment while worker pools process heavy database persistence async.
          </p>
        </div>
      )
    },
    "visualizing-convolutional-attention": {
      title: "Visualizing Convolutional Attention in Real-Time: Grad-CAM on Facial Landmark Features",
      date: "2026-05-22",
      readTime: "8 min read",
      tags: ["AI/ML", "Computer Vision", "Grad-CAM"],
      content: (
        <div className="space-y-6">
          <p>
            Deep neural networks are often critiqued for being black boxes. In safety-critical systems like a Driver Drowsiness Detector, knowing *why* a model classifies a state as drowsy is as important as the classification itself.
          </p>
          
          <h3 className="text-sm font-bold text-[#ccff00] uppercase tracking-wider mt-6">[1] GRAD-CAM ACTIVATION MAPS</h3>
          <p>
            Grad-CAM (Gradient-weighted Class Activation Mapping) uses the gradients of any target concept flowing into the final convolutional layer to produce a coarse localization map highlighting the important regions in the image. For drowsiness detection, we track activations around the eyes and mouth.
          </p>
          <pre className="bg-black p-4 border border-[#222] rounded text-[11px] text-[#ccff00] overflow-x-auto leading-normal">
{`# Visualizing VGGNet Activation Layers in PyTorch
with torch.no_grad():
    gradients = model.get_activations_gradient()
    pooled_gradients = torch.mean(gradients, dim=[0, 2, 3])
    activations = model.get_activations(img).detach()
    for i in range(512):
        activations[:, i, :, :] *= pooled_gradients[i]`}
          </pre>

          <h3 className="text-sm font-bold text-[#ccff00] uppercase tracking-wider mt-6">[2] FACIAL LANDMARK TRACKING</h3>
          <p>
            Integrating OpenCV landmark grids with CNN features creates a hybrid network that remains robust under varying lighting conditions. The CNN maps texture (yawning/eye closing) while landmark distance vectors calculate structural variance.
          </p>
        </div>
      )
    },
    "predicting-volatility-lstm": {
      title: "Predicting Market Volatility using Recurrent LSTM Models",
      date: "2026-04-10",
      readTime: "5 min read",
      tags: ["Deep Learning", "TensorFlow", "Time Series"],
      content: (
        <div className="space-y-6">
          <p>
            Time-series stock price forecasting requires networks that maintain long-term memory cells. Classic feedforward networks fail because they assume inputs are independent. Long Short-Term Memory (LSTM) cells solve this via forget and update gates.
          </p>
          
          <h3 className="text-sm font-bold text-[#ccff00] uppercase tracking-wider mt-6">[1] SEQUENCE LENGTH & HORIZON</h3>
          <p>
            A common pitfall is passing too large a sequence window. For financial trends, we structure 60-day historical matrices to predict 1-step or multi-step forward sequences. Regularization via Dropout (0.2) is critical to prevent overfitting on market noise.
          </p>
          <pre className="bg-black p-4 border border-[#222] rounded text-[11px] text-[#ccff00] overflow-x-auto leading-normal">
{`# LSTM Layer Stack in Keras/TensorFlow
model = Sequential([
    LSTM(50, return_sequences=True, input_shape=(x_train.shape[1], 1)),
    Dropout(0.2),
    LSTM(50, return_sequences=False),
    Dropout(0.2),
    Dense(25),
    Dense(1)
])`}
          </pre>

          <h3 className="text-sm font-bold text-[#ccff00] uppercase tracking-wider mt-6">[2] METRIC SHIELDS</h3>
          <p>
            We evaluate forecasts using Mean Absolute Error (MAE) and Root Mean Squared Error (RMSE). Rather than relying on final percentages, RMSE penalizes larger outlier errors, providing a safer risk indicator for volatility predictions.
          </p>
        </div>
      )
    }
  };

  const post = blogData[slug];

  if (!post) {
    return (
      <main className="min-h-screen bg-[#050505] text-[#f0f0f0] font-mono p-6 flex flex-col items-center justify-center">
        <p className="text-red-500 text-sm">Error: Log file not found in database.</p>
        <Link href="/blog" className="text-xs text-[#ccff00] mt-4 hover:underline">
          Return to Blog Directory
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-[#f0f0f0] font-mono p-6 md:p-12 relative crt-screen">
      <div className="absolute inset-0 grid-background pointer-events-none opacity-20"></div>
      <div className="absolute inset-0 crt-scanlines pointer-events-none opacity-10"></div>

      <div className="max-w-2xl mx-auto space-y-8 relative z-10">
        {/* Back navigation */}
        <div className="flex justify-between items-center border-b border-[#222] pb-4">
          <Link href="/blog" className="text-gray-500 hover:text-[#ccff00] flex items-center gap-2 text-xs uppercase font-bold">
            <ArrowLeft size={14} /> Back to Directory
          </Link>
          <div className="text-xs text-[#ccff00] font-bold">LOG_SECTOR_MOUNTED // {slug}</div>
        </div>

        {/* Post Metadata Header */}
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-[10px] text-gray-500 font-bold uppercase">
            <span className="flex items-center gap-1"><Clock size={12} /> {post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Tag size={12} className="text-[#ccff00]" /> 
              {post.tags.join(", ")}
            </span>
          </div>
        </div>

        {/* Main Post Content */}
        <div className="text-xs md:text-sm text-gray-300 leading-relaxed space-y-6 pt-4 border-t border-[#111]">
          {post.content}
        </div>

        {/* Footer */}
        <footer className="text-center text-[10px] text-gray-600 tracking-widest pt-12 border-t border-[#111]">
          SYSTEM_LOG_ID: 479e3f46 // CODENAME: CHARITESH-OS
        </footer>
      </div>
    </main>
  );
}
