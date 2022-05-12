import { Button, SxProps, Theme } from '@mui/material';

interface ButtonProps {
  label: string;
  handleClick?: () => void;
  isProcessing?: boolean;
  sx?: SxProps<Theme>;
}

export const ButtonComponent = ({ label, handleClick, isProcessing, sx }: ButtonProps) => {
  return (
    <Button
      disabled={isProcessing}
      type="submit"
      onClick={handleClick}
      sx={{
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
