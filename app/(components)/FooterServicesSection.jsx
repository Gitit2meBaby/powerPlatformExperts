import React from "react";
import Link from "next/link";

import styles from "../../styles/footerServices.module.css";

const FooterServicesSection = () => {
  return (
    <div className={styles.servicesSection}>
      {/* Main Business Links - Always Visible */}
      <div className={styles.mainLinks}>
        <h3>Our Business</h3>
        <Link href="https://www.officeexperts.com.au/about-us">
          Our Company
        </Link>
        <Link href="/meet-the-team">Our Team</Link>
        <Link href="/client-testimonials">Testimonials</Link>
        <Link href="https://www.officeexperts.com.au/blog">Blog</Link>
      </div>

      {/* Power Platform Services Dropdown */}
      <div className={styles.dropdownSection}>
        <h3 className={styles.dropdownHeader}>
          Microsoft Power Platform Services
        </h3>
        <div className={styles.dropdownContent}>
          <Link href="https://www.powerplatformexperts.com.au/">
            Microsoft Power Platform
          </Link>
          <Link href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps">
            Microsoft Power Apps
          </Link>
          <Link href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi">
            Microsoft Power BI
          </Link>
          <Link href="/https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate">
            Microsoft Power Automate
          </Link>
          <Link href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages">
            Microsoft Power Pages
          </Link>
        </div>
      </div>

      {/* Office Services Dropdown */}
      <div className={styles.dropdownSection}>
        <h3 className={styles.dropdownHeader}>Microsoft Office Services</h3>
        <div className={styles.dropdownContent}>
          <Link href="https://www.officeexperts.com.au/services/microsoft-office">
            Microsoft Office
          </Link>
          <Link href="https://www.excelexperts.com.au/">Microsoft Excel</Link>
          <Link href="https://www.accessexperts.com.au/">Microsoft Access</Link>
          <Link href="https://www.wordexperts.com.au/">Microsoft Word</Link>
          <Link href="https://www.officeexperts.com.au/services/microsoft-powerpoint">
            Microsoft PowerPoint
          </Link>
          <Link href="https://www.officeexperts.com.au/services/microsoft-office-365">
            Microsoft Office 365
          </Link>
        </div>
      </div>

      {/* Other Microsoft Services Dropdown */}
      <div className={styles.dropdownSection}>
        <h3 className={styles.dropdownHeader}>Other Microsoft Services</h3>
        <div className={styles.dropdownContent}>
          <Link href="https://www.officeexperts.com.au/services/by-business-solution/cloud-based-solutions-with-azure">
            Microsoft Azure
          </Link>
          <Link href="https://www.officeexperts.com.au/services/by-business-solution/office-and-sql-server-integration">
            Microsoft SQL Server
          </Link>
          <Link href="https://www.officeexperts.com.au/services/by-business-solution/online-solutions">
            Microsoft SharePoint
          </Link>
          <Link href="https://www.officeexperts.com.au/services/by-product-and-technology/microsoft-dot-net">
            Microsoft .NET
          </Link>
          <Link href="https://www.officeexperts.com.au/services/by-business-solution/custom-office-solutions">
            Microsoft Outlook
          </Link>
          <Link href="https://www.officeexperts.com.au/services/by-product-and-technology/microsoft-publisher">
            Microsoft Publisher
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterServicesSection;
