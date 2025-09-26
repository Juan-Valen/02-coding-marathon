# Self-Assessment: Frontend Development

### Example 1: Refactoring Form Components for Reusability

Initially, the signup and login forms were implemented as separate components with duplicated logic for handling input states and form submission:

```javascript
// Initial Signup Input State Handling
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
// ...additional fields

const handleInputChange = (e) => {
  if (e.target.name === "name") setName(e.target.value);
  if (e.target.name === "email") setEmail(e.target.value);
  if (e.target.name === "password") setPassword(e.target.value);
  // ...additional checks
};

```

**Problems Encountered:**

1. Logic was repeated in both login and signup forms.

2. Adding new fields required updating multiple places.

3. Harder to maintain and extend.

**Refactored Approach:**

We introduced controlled components and used consistent input state handling per form, keeping the logic modular: 

```javascript
// Refactored Signup Form
const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
  phone: "",
  gender: "",
  dob: "",
  membership: "Free",
});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

```

### Key Improvements:
- Centralized state management reduces redundancy.

- Easier to add new fields without repeating logic.

- Supports dynamic form updates for future enhancements like validation.

---

### Example 2: Implementing Navigation with React Router

Initially, the navigation bar did not include links for Signup and Login, which made it difficult for users to access authentication pages: 

```javascript
<div className='flex space-x-2'>
  <NavLink to='/' className={linkClass}>Home</NavLink>
  <NavLink to='/jobs' className={linkClass}>Jobs</NavLink>
  <NavLink to='/add-job' className={linkClass}>Add Job</NavLink>
</div>

```
**Challenges Encountered**

1. Users could not navigate to authentication pages easily.

2. Routes needed to match the App.jsx paths exactly to work with React

### Solution:
1. Added Signup and Login links in the navbar.

2. Updated route paths to /signup and /login in App.jsx for consistency: 

```javascript
<NavLink to='/signup' className={linkClass}>Sign Up</NavLink>
<NavLink to='/login' className={linkClass}>Login</NavLink>

```

### Key Improvements:

1. Full navigation access for all pages, including authentication.

2. React Router NavLink highlights active routes, improving UX

### Example 3: Handling Empty Job Lists

Initially, the JobsPage component would display an empty page if there were no jobs in the backend:

```javascript
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {jobs.map((job) => (
    <JobListing key={job.id} job={job} />
  ))}
</div>

```

**Problem:** Users had no feedback when the job list was empty.

**Refactored Approach:**

```javascript
{loading ? (
  <Spinner loading={loading} />
) : (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {jobs.length === 0 ? (
      <p className="text-center col-span-full text-gray-600">
        No jobs available at the moment.
      </p>
    ) : (
      jobs.map((job) => <JobListing key={job.id} job={job} />)
    )}
  </div>
)}

```

**Key Improvements:**

1. Displays a friendly message when there are no jobs.

2. Loading spinner improves user experience while data is fetched.

3. Grid layout maintains page structure regardless of job count

**Lessons Learned:**

1. **State Management:** React Router requires exact path matching; careful planning avoids navigation issues.

2. **Routing Consistency:** Thorough testing revealed this subtle issue, which could have led to unpredictable behavior in production.  

3. **User Experience:** Handling empty states and loading indicators significantly improves usability.

4. **Component Reusability:** Breaking down UI into modular components makes the app scalable and easier to maintain.

