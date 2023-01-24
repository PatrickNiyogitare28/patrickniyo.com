import React from 'react';
import Layout from '../../components/Layout';

const Publications: React.FC = () => {
  return (
    <Layout
      customMeta={{
        title: 'Publications - Patrick Niyogitare',
      }}
    >
      <div className="min-h-[70vh]">
        <div className="mt-14">
          <div>
            <a
              href="https://res.cloudinary.com/dccwzpgnz/image/upload/v1674516713/publications/Niyogitare_Final_draft_of_research_paper_about_privacy_violation_Dec_2022.docx_tr7fiu.pdf"
              target="_blank"
              rel="noreferrer"
            >
              How computer optimization has contributed to human privacy
              violence.
            </a>
            <label className="block text-sm">December 2022</label>
          </div>
        </div>
        <div className="mt-8">
          <div>
            <a
              href="https://res.cloudinary.com/dccwzpgnz/image/upload/v1674516715/publications/Patrick_Niyogitare_Research_paper_kt8evx.pdf"
              target="_blank"
              rel="noreferrer"
            >
              The Evolving Role of Social Media in the African Culture Promotion
              and Preservation
            </a>
            <label className="block text-sm">November 2022</label>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Publications;
