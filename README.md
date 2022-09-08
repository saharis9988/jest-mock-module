# Partial Mock Modules
Illustration of how to create a mock for specific functions inside modules which are used internally inside the unit we decide to test.

#### IMPORTANT NOTE
You have to notice that the internal function which is called by the function we test has to be part of another module if we decide to create a mock version of that function! If you have problems with the mock, try to separate the internal function to another module, as I did in the example.
