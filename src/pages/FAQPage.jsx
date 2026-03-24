import { useState } from 'react';
import '../styles/pages.css';

export function FAQPage() {
    const [expanded, setExpanded] = useState(null);

    const faqs = [
        {
            id: 1,
            question: "How long does shipping take?",
            answer: "Standard shipping takes 5-7 business days. Express shipping (2-3 days) is available for an additional fee. Orders are processed within 24 hours of purchase."
        },
        {
            id: 2,
            question: "What is your return policy?",
            answer: "We offer a 30-day money-back guarantee on all purchases. Items must be in original condition with all packaging and accessories. Contact our support team to initiate a return."
        },
        {
            id: 3,
            question: "Do you offer international shipping?",
            answer: "Currently, we ship only to addresses within the United States. We're working on expanding our shipping options globally soon!"
        },
        {
            id: 4,
            question: "How can I track my order?",
            answer: "You'll receive a tracking number via email once your order ships. You can use this number to track your package in real-time on our website."
        },
        {
            id: 5,
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and debit cards. All transactions are secure and encrypted."
        },
        {
            id: 6,
            question: "Are there any discounts for bulk orders?",
            answer: "Yes! Contact our sales team at bulk@nostalgiabait.com for special pricing on orders of 10 or more items."
        },
        {
            id: 7,
            question: "How do I use promo codes?",
            answer: "Enter your promo code in the 'Promo Code' field at checkout before completing your purchase. Discounts will be applied automatically."
        },
        {
            id: 8,
            question: "Is my personal information secure?",
            answer: "Absolutely. We use industry-standard SSL encryption to protect all customer data. We never share your information with third parties."
        }
    ];

    const toggleFAQ = (id) => {
        setExpanded(expanded === id ? null : id);
    };

    return (
        <div className="page-container">
            <h1 style={{ color: '#316ac5', marginBottom: '24px' }}>Frequently Asked Questions</h1>

            <div style={{ maxWidth: '800px' }}>
                {faqs.map((faq) => (
                    <div key={faq.id} className="box-2000s" style={{ marginBottom: '12px' }}>
                        <div
                            onClick={() => toggleFAQ(faq.id)}
                            style={{
                                cursor: 'pointer',
                                padding: '12px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                backgroundColor: '#f5f5f5',
                                borderRadius: '4px'
                            }}
                        >
                            <h3 style={{ margin: 0, fontSize: '14px', color: '#316ac5' }}>
                                {faq.question}
                            </h3>
                            <span style={{ fontWeight: 'bold', color: '#316ac5', fontSize: '18px' }}>
                                {expanded === faq.id ? '▼' : '▶'}
                            </span>
                        </div>
                        {expanded === faq.id && (
                            <div style={{ padding: '12px', borderTop: '1px solid #ddd' }}>
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
