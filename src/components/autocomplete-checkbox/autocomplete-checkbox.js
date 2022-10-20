import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export const AutocompleteCheckbox = ({ label, optionsByLabel, required, ...props }) => {
  return (
    <Autocomplete
      onChange={(oldValue, newValue) => {
        console.log(newValue);
      }}
      {...props}
      multiple
      disableCloseOnSelect
      renderOption={(optionProps, option, { selected }) => (
        <li {...optionProps}>
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
            checkedIcon={<CheckBoxIcon fontSize='small' />}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option[optionsByLabel]}
        </li>
      )}
      renderInput={params => <TextField required={required} {...params} label={label} />}
    />
  );
};
