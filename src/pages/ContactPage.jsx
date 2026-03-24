import { useState } from 'react';
import '../styles/pages.css';

export function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="page-container">
            <h1 style={{ color: '#316ac5', marginBottom: '24px' }}>Contact Us</h1>

            {submitted && (
                <div style={{ backgroundColor: '#ccffcc', border: '1px solid #66cc66', padding: '12px', marginBottom: '16px', borderRadius: '4px' }}>
                    <p style={{ margin: 0, color: '#006600', fontWeight: 'bold' }}>Thank you! Your message has been sent.</p>
                </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '24px' }}>
                <div className="box-2000s">
                    <h2 className="box-2000s-title">Send us a Message</h2>
                    <form onSubmit={handleSubmit} style={{ padding: '12px' }}>
                        <div style={{ marginBottom: '12px' }}>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div style={{ marginBottom: '12px' }}>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div style={{ marginBottom: '12px' }}>
                            <label htmlFor="subject">Subject:</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div style={{ marginBottom: '12px' }}>
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="6"
                                style={{ width: '100%' }}
                            />
                        </div>
                        <button className="btn-primary" style={{ width: '100%' }} type="submit">
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="box-2000s" style={{ height: 'fit-content' }}>
                    <h2 className="box-2000s-title">Contact Info</h2>
                    <div style={{ padding: '12px' }}>
                        <h4 style={{ marginBottom: '8px' }}>Email</h4>
                        <p style={{ margin: 0, marginBottom: '16px' }}>support@nostalgiabait.com</p>
                        
                        <h4 style={{ marginBottom: '8px' }}>Phone</h4>
                        <p style={{ margin: 0, marginBottom: '16px' }}>1-800-RETRO-2000</p>
                        
                        <h4 style={{ marginBottom: '8px' }}>Hours</h4>
                        <p style={{ margin: 0 }}>Mon-Fri: 9AM-6PM EST<br />Sat-Sun: 10AM-4PM EST</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
