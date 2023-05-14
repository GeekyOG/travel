import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const Android12Switch = styled(Switch)(() => ({
  padding: 8,
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#388E3C',
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#388E3C',
  },
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 40,
      height: 16,
    },
  },
}));

export function AnalyticsSwitch() {
  return <Android12Switch sx={{ m: 1 }} defaultChecked />;
}

export function MarketingSwitch() {
  return <Android12Switch sx={{ m: 1 }} />;
}