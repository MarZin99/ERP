type EmployeeListType = {
    id: string;
  firstName: string;
  lastName: string;
  position: string;
};

type EmployeeListProps = {
  employees: EmployeeListType[];
  onSelect: (employee: EmployeeListType) => void;
  selected: EmployeeListType | null;
};

export type {EmployeeListType, EmployeeListProps}