import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                <aside>
                    <h2>CS — Ticket System</h2>
                    <p>
                        Our Customer Support Zone helps you get assistance quickly and efficiently. Submit your issues and track their progress as our team reviews and resolves them. We prioritize every request to ensure timely support and clear communication, making your experience smoother and more reliable whenever you need help.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Our mission</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Products & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                        <a className='flex gap-1 items-center'><FaXTwitter />@x.cst.com</a>
                        <a className='flex gap-1 items-center'><FaLinkedinIn />@linkedin.cst.com</a>
                        <a className='flex gap-1 items-center'><FaFacebookF />@fb.cst.com</a>
                        <a className='flex gap-1 items-center'><SiGmail />aupport@cst.com</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;