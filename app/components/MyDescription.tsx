import React from 'react';

const MyDescription = () => {
    return (
        <section
            className="flex flex-col justify-center items-center px-4 sm:px-6 py-16 sm:py-24 border-t"
            style={{ borderColor: 'var(--border)', background: 'var(--bg-muted)' }}
        >
            <p
                className="text-center text-lg sm:text-xl md:text-2xl leading-relaxed max-w-4xl font-sans"
                style={{ color: 'var(--text-muted)' }}
            >
                <span style={{ color: 'var(--amber)', fontWeight: 600 }}>Computer Science Engineer</span> from the{' '}
                <span style={{ color: 'var(--amber)', fontWeight: 600 }}>University of Moratuwa</span>, working as a{' '}
                <span style={{ color: 'var(--amber)', fontWeight: 600 }}>Software Engineer</span> at{' '}
                <span style={{ color: 'var(--amber)', fontWeight: 600 }}>Sysco Labs</span>. On the side, I build spreadsheet automations, web apps, and AI integrations for people who have a real problem to solve.
            </p>
            <p
                className="text-center text-xs sm:text-sm leading-relaxed max-w-4xl mt-8 font-sans"
                style={{ color: 'var(--text-faint)' }}
            >
                Outside work, I enjoy taking on freelance projects - helping a solo founder tidy up their data, building a small tool for a local business, or adding AI to something that could genuinely benefit from it. If you have a problem, just reach out.
            </p>
        </section>
    );
};

export default MyDescription;
