// Workflow.js

import React, { useState } from 'react';
import '../styles/workflow.css';

const Workflow = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const templates = [
        { category: 'Announcement', workflow: 'Featured Service', image: 'images/image 135.png' },
        { category: 'Announcement', workflow: 'Weekly Newsletter', image: 'images/image 135.jpg' },
        { category: 'Announcement', workflow: 'New Product/Service Announcement', image: 'images/image 1352.jpg' },
        { category: 'Educate & Inform', workflow: 'New Product/Service Announcement', image: 'images/image 1352.jpg' },
        { category: 'Educate & Inform', workflow: 'Weekly Newsletter', image: 'images/image 135.jpg' },
        { category: 'Educate & Inform', workflow: 'Editorial Newsletter', image: 'images/image 1351.jpg' },
        { category: 'Educate & Inform', workflow: 'Editorial Newsletter', image: 'images/image 1351.jpg' },
        { category: 'Educate & Inform', workflow: 'Featured Service', image: 'images/image 135.png' },
        { category: 'Educate & Inform', workflow: 'New Product/Service Announcement', image: 'images/image 1352.jpg' },
        { category: 'Invitations', workflow: 'Featured Service', image: 'images/image 135.png' },
        { category: 'Invitations', workflow: 'Weekly Newsletter', image: 'images/image 135.jpg' },
        { category: 'Invitations', workflow: 'Editorial Newsletter', image: 'images/image 1351.jpg' },
        { category: 'Occasions', workflow: 'Featured Service', image: 'images/image 135.png' },
        { category: 'Occasions', workflow: 'Weekly Newsletter', image: 'images/image 135.jpg' },
        { category: 'Occasions', workflow: 'Editorial Newsletter', image: 'images/image 1352.jpg' },
    ];

    const categories = ['Announcement', 'Educate & Inform', 'Invitations', 'Occasions'];

    const handleCategoryChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((item) => item !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    return (
        <div className="workflow">
            <div className="container">
                <div className="row" style={{ padding: '40px 0px 80px 60px' }}>
                    <div className="col-sm-3">
                        <h3 className="workflow-category">Categories</h3>
                        {categories.map((category, index) => (
                            <div key={index} className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value={category}
                                    checked={selectedCategories.includes(category)}
                                    onChange={() => handleCategoryChange(category)}
                                />
                                <label className="form-check-label">{category}</label>
                            </div>
                        ))}
                    </div>
                    <div className="col">
                        <div className="search-bar">
                            <input
                                type="text"
                                placeholder="Search email templates"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="card-container" style={{ display: 'flex', flexDirection: 'column' }}>
                            {categories.map((category) => (
                                <div key={category} style={{ display: 'flex', flexDirection: 'column' }}>
                                    {templates.some(
                                        (template) =>
                                            (selectedCategories.length === 0 || selectedCategories.includes(template.category)) &&
                                            template.workflow.toLowerCase().includes(searchTerm.toLowerCase()) &&
                                            template.category === category
                                    ) && (
                                        <h3
                                            style={{
                                                marginTop: '20px',
                                                marginBottom: '16px',
                                                fontFamily: 'Helvetica Neue',
                                                fontSize: '20px',
                                                fontWeight: '700',
                                                lineHeight: '28px',
                                                letterSpacing: '-0.02em',
                                                textAlign: 'left',
                                            }}
                                        >
                                            {category}
                                        </h3>
                                    )}
                                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        {templates
                                            .filter(
                                                (template) =>
                                                    (selectedCategories.length === 0 || selectedCategories.includes(template.category)) &&
                                                    template.workflow.toLowerCase().includes(searchTerm.toLowerCase()) &&
                                                    template.category === category
                                            )
                                            .map((template, index) => (
                                                <div
                                                    key={index}
                                                    className="card"
                                                    style={{
                                                        width: '287.33px',
                                                        height: '308px',
                                                        borderRadius: '12px',
                                                        flex: '0 0 287.33px',
                                                        margin: '0 1.2rem 1.2rem 0',
                                                        position: 'relative',
                                                        overflow: 'hidden',
                                                    }}
                                                >
                                                    <img
                                                        src={template.image}
                                                        className="card-img-top"
                                                        alt="Placeholder"
                                                        style={{
                                                            width: '287.33px',
                                                            height: '228px',
                                                            transition: 'transform 0.5s, opacity 0.5s',
                                                            opacity: '1',
                                                        }}
                                                        onMouseOver={(e) => {
                                                            e.currentTarget.style.transform = 'scale(1.1)';
                                                            e.currentTarget.style.opacity = '0.6';
                                                        }}
                                                        onMouseOut={(e) => {
                                                            e.currentTarget.style.transform = 'scale(1)';
                                                            e.currentTarget.style.opacity = '1';
                                                        }}
                                                    />
                                                    <div className="card-body">
                                                        <h5
                                                            style={{
                                                                fontFamily: 'Helvetica Neue',
                                                                fontSize: '18px',
                                                                fontWeight: '700',
                                                                lineHeight: '24px',
                                                                letterSpacing: '-0.01em',
                                                                textAlign: 'left',
                                                            }}
                                                            className="card-title"
                                                        >
                                                            {template.workflow}
                                                        </h5>
                                                        <button className="card-button">Use this</button>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Workflow;