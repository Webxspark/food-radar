// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.19;

contract ReportPlatform {
    uint256 count = 0;
    struct Account {
        address wallet_address;
        string data;
        bool isAdmin;
    }

    struct Report {
        address wallet_address;
        string data;
        string token;
    }

    mapping(address => Account) public accounts;
    Report[] public reports;

    // Function to create a new user
    function createUser(address wallet_address) public returns (bool) {
        // Check if the user already exists
        if (accounts[wallet_address].wallet_address == wallet_address) {
            return false;
        }

        // Create a new user
        accounts[wallet_address] = Account(wallet_address, "", false);
        return true;
    }

    // Function to check if a user exists
    function isUserExists(address wallet_address) public view returns (bool) {
        return accounts[wallet_address].wallet_address == wallet_address;
    }

    // Function to fetch a user's account information
    function fetchUser(address wallet_address)
        public
        view
        returns (Account memory)
    {
        return accounts[wallet_address];
    }

    // Function to update a user's account information
    function updateUser(address wallet_address, string memory data)
        public
        returns (bool)
    {
        // Check if the user exists
        if (accounts[wallet_address].wallet_address != wallet_address) {
            return false;
        }

        // Update the user's data
        accounts[wallet_address].data = data;
        return true;
    }

    function newReport(
        address _wallet_address,
        string memory _data,
        string memory _token
    ) public returns (bool) {
        Report memory newReport = Report(_wallet_address, _data, _token);
        reports.push(newReport);
        return true;
    }

    function fetchReports() public view returns (Report[] memory) {
        return reports;
    }

    function fetchReport(uint256 index)
        public
        view
        returns (
            address,
            string memory,
            string memory
        )
    {
        return (
            reports[index].wallet_address,
            reports[index].data,
            reports[index].token
        );
    }

    // Function to update admin status of a user
    function updateAdmin(address wallet_address, bool new_status)
        public
        returns (bool)
    {
        // Check if the user exists
        if (accounts[wallet_address].wallet_address != wallet_address) {
            return false;
        }

        // Update the user's admin status
        accounts[wallet_address].isAdmin = new_status;
        return true;
    }
}
