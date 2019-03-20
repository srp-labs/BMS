export default theme => ({
    bannerSection: {
        height: '50vh',
        background: `linear-gradient(to right, rgba(107,183,86,0.95), 
                            rgba(0,143,104,0.95))`,
        clipPath: 'polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0)',
        transition: 'clip-path 0.25s',
        willChange: 'clip-path',
        
        [theme.breakpoints.down('sm')]: {
            clipPath: 'polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0)',
        },
    },

})