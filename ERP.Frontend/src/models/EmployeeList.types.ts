type EmployeeLite = {
  id: string;
  firstName: string;
  lastName: string;
  positionName: string;
};

type EmployeeListProps = {
  employees: EmployeeLite[];
  onSelect: (employee: EmployeeLite) => void;
  selectedID: string | null;
};

export type {EmployeeLite, EmployeeListProps}