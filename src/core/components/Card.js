import { Card } from '@mui/material';
import { Box, styled } from '@mui/system';

const CardRoot = styled(Card)(() => ({
    height: '100%',
    padding: '10px 20px',
}));

const CardTitle = styled('div')(({ subtitle }) => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
    marginBottom: !subtitle && '16px',
}));

export default  ({ children, title, subtitle, icon }) => {
    return (
        <CardRoot elevation={6}>
            <CardTitle subtitle={subtitle}>{title}</CardTitle>
            {subtitle && <Box sx={{ mb: 2 }}>{subtitle}</Box>}
            {children}
        </CardRoot>
    );
};