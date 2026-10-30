export function validateEmployee(name, email, department, salary) {
    if (!name.trim()) {
        return "Name is required";
    }

    if (!email.trim()) {
        return "Email is required";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return "Enter a valid email";
    }

    if (!department.trim()) {
        return "Department is required";
    }

    if (!salary || Number(salary) <= 0) {
        return "Enter a valid salary";
    }

    return null;
}
