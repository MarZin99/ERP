type EmployeeLite = {
  id: string;
  firstName: string;
  lastName: string;
  positionName: string;
};

type EmployeeListProps = {
  employees: EmployeeLite[];
  onSelect: (employee: EmployeeLite) => void;
  selected: EmployeeLite | null;
};

export type {EmployeeLite, EmployeeListProps}