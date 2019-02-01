import { DepartmentsRoutingModule } from './departments-routing.module';

describe('DepartmentsRoutingModule', () => {
  let departmentsRoutingModule: DepartmentsRoutingModule;

  beforeEach(() => {
    departmentsRoutingModule = new DepartmentsRoutingModule();
  });

  it('should create an instance', () => {
    expect(departmentsRoutingModule).toBeTruthy();
  });
});
