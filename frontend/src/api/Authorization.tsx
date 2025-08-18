
export interface LoginFormData {
    username: string;
    password: string;
  }
 
 export interface LoginResponse {
    success: boolean;
    message: string;
    token?: string;
  }

export async function login(formData: LoginFormData): Promise<LoginResponse> {
    try {
        const response = await fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
        const data: LoginResponse = await response.json();
        return data;
    } catch(error) {
        console.error("Error logging in");
        throw error;
    }
}