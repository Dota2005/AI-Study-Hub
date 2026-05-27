# Database Design - AI Study Hub

## Database Name

```text
Main Tables
1. users
Stores user account information.
Fields:
    id
    full_name
    email
    password_hash
    role
    status
    created_at
    updated_at
2. documents
Stores document metadata.
Fields:
    id
    title
    description
    file_name
    file_type
    file_size
    file_url
    owner_id
    subject_id
    folder_id
    created_at
    updated_at
3. folders
Stores user folders.
Fields:
    id
    name
    owner_id
    created_at

4. subjects
Stores subject/category information.
Fields:
    id
    name
    description

5. document_shares
Stores document sharing permissions.
Fields:
    id
    document_id
    shared_by
    shared_to
    permission
    created_at

6. study_groups
Stores study group information.
Fields:
    id
    name
    description
    owner_id
    created_at

7. group_members
Stores study group members.
Fields:
    id
    group_id
    user_id
    role
    joined_at

8. ai_usage_limits
Stores AI usage records.
Fields:
    id
    user_id
    usage_date
    feature_type
    usage_count

9. reports
Stores user reports for documents.
Fields:
    id
    document_id
    reported_by
    reason
    status
    created_at

10. system_logs
Stores important admin/system actions.
Fields:
    id
    actor_id
    action
    target_type
    target_id
    reason
    created_at

11. email_otps
Manage login/ register through email
Fields:
    id
    email
    otp_code
    purpose
    expires_at
    used
    created_at