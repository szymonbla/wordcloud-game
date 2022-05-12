import { Button, SxProps } from '@mui/material';

interface ButtonProps {
  label: string;
  handleClick?: () => void;
  isProcessing?: boolean;
  sx?: SxProps;
}

export const ButtonComponent = ({ label, handleClick, isProcessing, sx }: ButtonProps) => {
  return (
    <Button
      disabled={isProcessing}
      type="submit"
      onClick={handleClick}
      sx={{
        width: '100%',
        typography: 'body1',
        letterSpacing: 2,
        fontWeight: '600',
        borderRadius: 2,
        backgroundColor: 'grey.800',
        color: 'common.white',
        textTransform: 'uppercase',
        py: 2,
        '&:hover': {
          backgroundColor: 'grey.800',
          color: 'common.white'
        },
        ...sx
      }}
    >
      {label}
    </Button>
  );
};
