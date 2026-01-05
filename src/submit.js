// submit.js

export const SubmitButton = () => {

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px'}}>
            <button 
                type="submit"
                style={{
                    backgroundColor: 'var(--accent-primary)',
                    color: 'white',
                    border: 'none',
                    padding: '10px 24px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--accent-hover)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--accent-primary)'}
            >
                Submit
            </button>
        </div>
    );
}
